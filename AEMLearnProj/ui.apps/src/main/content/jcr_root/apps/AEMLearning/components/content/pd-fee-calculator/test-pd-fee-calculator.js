describe('Tax calculator', function() {
  let cqDialogNode = getnode('../cq:dialog');

  it('Has the right dialog items', function() {
    assert.contains(cqDialogNode, 'name', './spacing');
  });
});
