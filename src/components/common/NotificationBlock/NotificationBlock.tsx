import { colorPalette, typography } from '@/config'
import { NotificationData } from '@/types'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

type NotificationBlockProps = {
  notification: NotificationData
}

const NotificationBlock: FC<NotificationBlockProps> = ({
  notification: { title, type, content, status, updatedAt },
}) => {
  const updatedDate = new Date(updatedAt)
  const curDate = new Date()
  const secondsDif = (curDate.getTime() - updatedDate.getTime()) / 1000

  return (
    <Stack
      sx={{ width: '100%', '&:not(:last-child)': { paddingBottom: '16px' } }}
      direction="column"
    >
      <Stack
        sx={{ width: '100%' }}
        alignItems="flex-end"
        justifyContent="space-between"
        direction="row"
      >
        <Typography
          className={typography.pc.b3}
          color={colorPalette.dark}
          component="p"
          textAlign="left"
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        className={typography.pc.descReg}
        color={colorPalette.dark}
        component="p"
        textAlign="left"
      >
        {content}
      </Typography>
      <Typography
        className={typography.mb.helpReg}
        color={colorPalette.grey}
        component="span"
        textAlign="left"
        fontStyle="italic"
        sx={{ marginTop: '4px' }}
      >
        {Math.ceil(secondsDif)} seconds ago
      </Typography>
    </Stack>
  )
}

export default NotificationBlock
