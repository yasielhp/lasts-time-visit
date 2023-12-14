const db = await Deno.openKv()



await db
  .atomic()
  .sum(["visits"],1n)
  .commit()

const result = await db.get<Deno.KvU64>(["visits"])

console.log(result)