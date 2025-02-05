import assert from "assert"
import plugin from "../../src"
import { version } from "../../package.json"
const expectedMeta = {
  name: "eslint-plugin-svelte",
  version,
}

describe("Test for meta object", () => {
  it("A plugin should have a meta object.", () => {
    assert.strictEqual(plugin.meta.name, expectedMeta.name)
    assert.strictEqual(typeof plugin.meta.version, "string")
  })

  for (const [name, processor] of Object.entries(plugin.processors)) {
    it(`"${name}" processor should have a meta object.`, () => {
      assert.strictEqual(processor.meta.name, expectedMeta.name)
      assert.strictEqual(typeof processor.meta.version, "string")
    })
  }
})
