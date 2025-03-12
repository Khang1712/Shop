"use client";

import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"
import { useTranslation } from "react-i18next"

const Help = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">{t('need help?')}</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink href="/contact">{t('contact')}</LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/contact">
              {t('returns & Exchanges')}
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
