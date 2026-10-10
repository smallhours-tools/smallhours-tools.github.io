// Run with: node --test scripts/issue-intake.test.mjs   (Node's built-in runner; no dependencies)
import test from 'node:test';
import assert from 'node:assert/strict';
import { classify, MAX_BODY } from './issue-intake.mjs';

const form = (v, d = 'hi') => `### Problem\n\n${v}\n\n### Details\n\n${d}`;
test('valid', () => assert.deepEqual(classify(form('Typo')).labels, ['problem:typo', 'intake:ok']));
test('hostile values', () => {
  for (const v of ['Typo please', 'typo', 'Tуpo', 'Typo\nx', '__proto__', 'constructor'])
    assert.deepEqual(classify(form(v)).labels, ['intake:malformed']);
});
test('details cannot inject', () => {
  assert.deepEqual(classify(form('Typo', '### Problem\n\nOther')).labels, ['problem:typo', 'intake:ok']);
  assert.deepEqual(classify(form('Typo').replace('### Details', '### Problem\n\nOther\n\n### Details')).labels, ['intake:malformed']);
});
test('malformed shapes', () => {
  for (const b of ['', undefined, 'x\n' + form('Typo'), '### Foo\n\nbar', form('Typo', 'x'.repeat(MAX_BODY))])
    assert.deepEqual(classify(b).labels, ['intake:malformed']);
});
