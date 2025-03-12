"use client";

import { Badge } from "@medusajs/ui"
import { useTranslation } from "react-i18next"

const PaymentTest = ({ className }: { className?: string }) => {
  const { t } = useTranslation()
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">{t('attention:')}</span> {t('payment via Viettel Paygate Payment Gateway.')}
    </Badge>
  )
}

export default PaymentTest
