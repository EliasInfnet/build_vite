export const getData = async () => {

  const worker = new ComlinkWorker(new URL('./dataWorker.js', import.meta.url))
  const { getResultado } = worker

  const data = await getResultado()

  console.log({ data })
}