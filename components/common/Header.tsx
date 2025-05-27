"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
  DropdownSection,
  useDisclosure,
} from "@heroui/react";

import { usePathname } from "next/navigation";
import { Heart, Menu, UserCircle } from "lucide-react";
import LinkNext from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import TravelNav from "./TravelNav";
import LoginModal from "@/components/auth/login/LoginModal";
import { menuItems } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function HeaderMenu({ className }: { className?: string }) {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger aria-label="Menu" className={className}>
          <Button variant="light" className="text-white" size="sm" isIconOnly>
            <Menu />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          variant="light"
          className="p-4"
        >
          <DropdownSection showDivider>
            {menuItems.mobile.map((item, index) => (
              <DropdownItem key={`${item}-${index}`}>
                <Link
                  className={cn(
                    "w-full flex items-center gap-2 text-foreground",
                    isActive(item.path) ? "font-bold" : ""
                  )}
                  href={item.path}
                  size="sm"
                  as={LinkNext}
                >
                  <item.icone
                    size={20}
                    className={cn(
                      "text-primary dark:text-white",
                      isActive(item.path) ? "font-bold" : ""
                    )}
                  />
                  {item.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownSection>
          <DropdownSection showDivider>
            {menuItems.desktop.map((item, index) => (
              <DropdownItem key={`${item}-${index}`}>
                <Link
                  className={cn(
                    "w-full flex items-center gap-2 text-foreground",
                    isActive(item.path) ? "font-bold" : ""
                  )}
                  href={item.path}
                  size="sm"
                  as={LinkNext}
                >
                  <item.icone
                    size={20}
                    className={cn(
                      "text-foreground",
                      isActive(item.path) ? "font-bold" : ""
                    )}
                  />
                  {item.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownSection>
          <DropdownSection>
            {menuItems.other.map((item, index) => (
              <DropdownItem key={`${item}-${index}`}>
                <Link
                  className={cn(
                    "w-full flex items-center gap-2 text-foreground",
                    isActive(item.path) ? "font-bold" : ""
                  )}
                  href={item.path}
                  size="sm"
                  as={LinkNext}
                >
                  <item.icone
                    size={20}
                    className={cn(
                      "text-secondary",
                      isActive(item.path) ? "font-bold" : ""
                    )}
                  />
                  {item.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    );
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathName]);

  return (
    <div className="bg-primary-500 text-white sm:py-4 lg:p-8">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        position="static"
        className="bg-primary-500"
      >
        {/* Start Desktop */}
        <NavbarContent>
          <NavbarBrand
            as={LinkNext}
            href="/"
            className="flex items-center gap-2"
          >
            <Logo type="blanc_orange" className="w-28" />
            {/* <Icone type="icone_bleu" className="size-10" /> */}
            {/* <p className="font-bold font-ibrand text-2xl">Fastosh</p> */}
          </NavbarBrand>
        </NavbarContent>
        {/* Center Desktop */}
        <NavbarContent
          className="hidden lg:flex gap-4"
          justify="center"
        ></NavbarContent>
        {/* End Desktop */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={LinkNext}
              href="/profil/favoris"
              isIconOnly
              variant="light"
              className="text-white"
              size="sm"
            >
              <Heart />
            </Button>
          </NavbarItem>

          <NavbarItem className="hidden">
            <ThemeSwitcher />
          </NavbarItem>

          <NavbarItem>
            <UserCircle
              onClick={onOpen}
              className="size-6 sm:size-8 sm:hidden"
            />
            <Button
              variant="light"
              className="text-white hidden sm:flex"
              size="sm"
              startContent={<UserCircle size={20} />}
              onPress={onOpen}
            >
              Se connecter
            </Button>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            icon={<Menu />}
          />
          <HeaderMenu className="hidden sm:flex" />
        </NavbarContent>
        {/* Mobile */}
        <NavbarMenu className="flex flex-col gap-4 py-8">
          {menuItems.mobile.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="flex items-center justify-between"
            >
              <Link
                className={cn(
                  "w-full flex items-center gap-2 text-black",
                  isActive(item.path) ? "font-bold" : ""
                )}
                href={item.path}
                size="sm"
                as={LinkNext}
              >
                <item.icone
                  size={20}
                  className={cn(
                    "text-primary",
                    isActive(item.path) ? "font-bold" : ""
                  )}
                />
                {item.name}
              </Link>
              {isActive(item.path) && (
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              )}
            </NavbarMenuItem>
          ))}
          <Divider className="my-4" />
          {menuItems.desktop.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="flex items-center justify-between"
            >
              <Link
                className={cn(
                  "w-full flex items-center gap-2 text-black",
                  isActive(item.path) ? "font-bold" : ""
                )}
                href={item.path}
                size="sm"
                as={LinkNext}
              >
                <item.icone
                  size={20}
                  className={cn(
                    "text-foreground",
                    isActive(item.path) ? "font-bold" : ""
                  )}
                />
                {item.name}
              </Link>
              {isActive(item.path) && (
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              )}
            </NavbarMenuItem>
          ))}
          <Divider className="my-4" />
          {menuItems.other.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="flex items-center justify-between"
            >
              <Link
                className={cn(
                  "w-full flex items-center gap-2 text-black",
                  isActive(item.path) ? "font-bold" : ""
                )}
                href={item.path}
                size="sm"
                as={LinkNext}
              >
                <item.icone
                  size={20}
                  className={cn(
                    "text-secondary",
                    isActive(item.path) ? "font-bold" : ""
                  )}
                />
                {item.name}
              </Link>
              {isActive(item.path) && (
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <TravelNav />
      <LoginModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
