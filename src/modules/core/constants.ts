import { createGzip, createDeflate } from "zlib"
import { Transform } from "stream"

export const CONTENT_WIDTH = "1200px"
export const HEADER_HEIGHT = "56px"

export const SMALL_SCREEN_QUERY_WIDTH = "600px"
export const SMALL_SCREEN_QUERY = `@media (max-width: ${SMALL_SCREEN_QUERY_WIDTH})`

export const IS_SERVER = process.env.__SERVER__ === "true"
export const CANONICAL_HOST = "https://enitoni.dev"

export const BUILD_FOLDER = "./build"
export const BUILD_PUBLIC_FOLDER = "./build/public"

export const SERVER_SUPPORTED_ENCODINGS = {
  gzip: createGzip,
  deflate: createDeflate,
  // Identity encoding means the browser doesn't accept above compression modes.
  // Creates a transform stream that doesn't transform anything
  identity: () =>
    new Transform({ transform: (data, _, callback) => callback(null, data) }),
} as const
