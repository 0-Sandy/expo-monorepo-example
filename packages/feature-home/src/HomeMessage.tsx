import { Trans } from '@repo/lang'
import { Paragraph, Strong } from '@repo/ui'
import { ComponentProps } from 'react'

type HomeMessageProps = ComponentProps<typeof Paragraph>

export const HomeMessage = (props: HomeMessageProps) => (
 <Paragraph {...props}>
  <Trans i18nKey="feature-home:welcome">
   Hello from an <Strong>Expo monorepo</Strong>!
  </Trans>
 </Paragraph>
)
