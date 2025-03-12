'use client';

import { Button, Heading } from "@medusajs/ui"
import {useTranslation} from 'react-i18next'
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation()
  return (
    <div className="h-[90vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6"
       style={{
        backgroundImage: `url('http://localhost:9000/static/1733224477189-49e5936e-1d3a-4e78-b22c-7b902726c7f8.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center 15%",
      }}
      >
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
            style={{ color: "white" }}
            >
            {t('welcome to Medusa Store')}
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
