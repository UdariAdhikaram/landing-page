import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'SERVICES', href: '#', current: true },
  { name: 'ABOUT US', href: '#', current: false },
  { name: 'CONTACT US', href: '#', current: false },
  { name: 'CAREERS', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#4F46E5]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#4338CA]">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo - Left side */}
              <div className="flex items-center">
                <div className="flex shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/assets/Logo.png"
                    alt="AT Digital"
                  />
                </div>
              </div>

              {/* Desktop Navigation - Right side */}
              <div className="hidden md:ml-6 md:block ml-auto">
                <div className="flex space-x-2 lg:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                        'rounded-md px-3 py-2 text-sm lg:text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#4338CA] text-white' : 'text-gray-300 hover:bg-[#4338CA] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}