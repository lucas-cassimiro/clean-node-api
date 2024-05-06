import { type Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient | null,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      monitorCommands: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: (collection: any, collectionData: any): any => {
    const { insertedId } = collection
    const collectionWithoutId = { id: insertedId.toString(), ...collectionData }
    return collectionWithoutId
  }
}
