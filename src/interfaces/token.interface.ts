import Metadata from "./metadata.interface"
import {Blockchain} from "../enums"

export default interface Token {
    id: number
    chainId: Blockchain
    collectionAddress: string
    modelId: number
    assetId: number
    tokenId: string
    metadata: Metadata
    createdAt: Date
    updatedAt: Date
}