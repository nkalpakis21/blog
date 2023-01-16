import {useCookies} from 'react-cookie';
import {useRouter} from "next/router";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from '@headlessui/react';

const Login = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [open, setOpen] = useState(true)
    const router = useRouter();
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                    <div className="w-full max-w-md space-y-8">
                                        <div>
                                            <img
                                                className="mx-auto h-12 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt="Your Company"
                                            />
                                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                Sign in to your account
                                            </h2>
                                            <p className="mt-2 text-center text-sm text-gray-600">
                                                Or{' '}
                                                <a href="#"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    start your 14-day free trial
                                                </a>
                                            </p>
                                        </div>
                                        <form className="mt-8 space-y-6" action="#" method="POST"
                                              onSubmit={(e: React.SyntheticEvent) => {
                                                  e.preventDefault();
                                                  const target = e.target as typeof e.target & {
                                                      email: { value: string };
                                                      password: { value: string };
                                                  };
                                                  const email = target.email.value; // typechecks!
                                                  setCookie('user', email, {path: '/'});
                                                  // make async call to log user in
                                                  router.back()
                                              }}>
                                            <input type="hidden" name="remember" defaultValue="true"/>
                                            <div className="-space-y-px rounded-md shadow-sm">
                                                <div>
                                                    <label htmlFor="email-address" className="sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        id="email-address"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        required
                                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Email address"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="password" className="sr-only">
                                                        Password
                                                    </label>
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <input
                                                        id="remember-me"
                                                        name="remember-me"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="remember-me"
                                                           className="ml-2 block text-sm text-gray-900">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Login