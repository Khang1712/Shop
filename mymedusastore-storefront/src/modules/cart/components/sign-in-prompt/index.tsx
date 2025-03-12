"use client";

import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslation } from "react-i18next"

const SignInPrompt = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          {t('already have an account?')}
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          {t('sign in for a better experience.')}
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10" data-testid="sign-in-button">
            {t('sign in')}
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
