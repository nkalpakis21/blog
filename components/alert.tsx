import cn from 'classnames'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
    return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
    </div>
  )
}

export default Alert
