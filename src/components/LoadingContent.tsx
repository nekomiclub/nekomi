import { FC } from 'react'
import { Ring } from '@uiball/loaders'



/** Simple loading content component */
const LoadingContent: FC = () => {
  return <div className="flex items-center gap-[16px]">
    <Ring size={16} color="#555555" />

    <p className="text-grey-new">Завантажуємо контент...</p>
  </div>
}

export default LoadingContent