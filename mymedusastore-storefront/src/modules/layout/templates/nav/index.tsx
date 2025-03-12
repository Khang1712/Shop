"use client";

import { Suspense, useState  } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { useTranslation } from "react-i18next"
import 'i18n/i18n'

export default function Nav() {
  const { t } = useTranslation('home')
  const { i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const regions: StoreRegion[] = []; 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false); 
  }
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
            <div className="relative">
                <button
                  className="py-2 px-3 hover:text-black flex items-center gap-1"
                  onClick={toggleMenu}
                >
                  Ngôn ngữ
                  <span>{isMenuOpen ? "▲" : "▼"}</span>
                </button>
                {isMenuOpen && (
                  <ul className="absolute bg-white shadow-lg border rounded mt-2 w-28">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => changeLanguage("vi")}
                    >
                      Tiếng Việt
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </li>
                  </ul>
                )}
              </div>
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  {t('search')}
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                {t('account')}
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  {t('cart')} (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
