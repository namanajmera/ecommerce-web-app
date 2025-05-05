"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import Menu from './Menu';
import { NavItem } from '@/types/navItems';


const navItems: NavItem[] = [
    { name: 'Shop', href: '/shop' },
    { name: 'On Sale', href: '/sale' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Brands', href: '/brands' }
];

const HeaderComponent = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="border-b">
            <div className="flex items-center justify-between px-4 py-3 md:px-8">
                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <Menu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                </div>

                <Link href="/" className="text-2xl font-bold font-secondry">
                    SHOP.CO
                </Link>

                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm hover:underline ${pathname === item.href ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <FiSearch size={20} className="cursor-pointer" />
                    <FiShoppingCart size={20} className="cursor-pointer" />
                    <FiUser size={20} className="cursor-pointer" />
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm ${pathname === item.href ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default HeaderComponent;