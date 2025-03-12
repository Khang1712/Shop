"use client";

import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import { useTranslation } from "react-i18next"

const EmptyCartMessage = () => {
  const { t } = useTranslation()
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        {t('cart')}
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        {t('you don &apos;t')} {t('have anything in your cart. Let&apos;s')} {t('change that, use the link below to start browsing our products.')}
      </Text>
      <div>
        <InteractiveLink href="/store">{t('explore products')}</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
