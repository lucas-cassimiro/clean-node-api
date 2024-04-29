import { type Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient | null,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      monitorCommands: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any, collectionData: any): any => {
    const { insertedId } = collection
    const collectionWithoutId = { id: insertedId.toString(), ...collectionData }
    return collectionWithoutId
  }
}
