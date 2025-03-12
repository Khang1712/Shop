"use client"

import { resetOnboardingState } from "@lib/data/onboarding"
import { Button, Container, Text } from "@medusajs/ui"
import { useTranslation } from "react-i18next"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  const { t } = useTranslation()
  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <Text className="text-ui-fg-base text-xl">
          {t('your test order was successfully created!')} 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          {t('you can now complete setting up your store in the admin.')}
        </Text>
        <Button
          className="w-fit"
          size="xlarge"
          onClick={() => resetOnboardingState(orderId)}
        >
          {t('complete setup in admin')}
        </Button>
      </div>
    </Container>
  )
}

export default OnboardingCta
