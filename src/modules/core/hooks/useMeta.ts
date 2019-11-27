import { MetaInformation } from "../stores/metaStore"
import { useStores } from "../../../common/state/hooks/useStores"
import { useUniversalEffect } from "../../../common/react/hooks/useUniversalEffect"

export const useMeta = (newMeta: Partial<MetaInformation>) => {
  const { metaStore } = useStores()

  useUniversalEffect(() => {
    metaStore.setValue(newMeta)

    return () => {
      metaStore.setValue({})
    }
  }, [newMeta])
}
