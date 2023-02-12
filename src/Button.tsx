import cx from "classnames"
import { createElement, forwardRef } from "react"

export const Button = forwardRef(
  <T extends ButtonTag>(
    {
      children,
      size = "sm",
      color = "white",
      className = "",
      tag = "button" as T,
      ...remainingProps
    }: Props<T>,
    ref: RefType<T>
  ) => {
    const props = {
      // pass ref to underlying element
      ref,

      // add button styles to any classes provided
      className: cx("Button", className, sizeStyles[size], colorStyles[color]),

      // for buttons, default to type="button" (can be overridden)
      ...(tag === "button" ? { type: "button" } : {}),

      // pass on any other button or anchor props provided
      ...remainingProps,
    }
    return createElement(tag, props, children)
  }
)

// prettier-ignore
const sizeStyles = {
  xs: "text-xs   px-2.5 py-1.5",
  sm: "text-sm   px-3   py-2",
  md: "text-base px-4   py-2",
  lg: "text-lg   px-4   py-2",
  xl: "text-xl   px-6   py-3",
}

// prettier-ignore
const colorStyles = {
  primary:   "bg-primary-600   hover:bg-primary-700   focus:ring-primary-500   text-white     border-transparent ",
  secondary: "bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 text-white     border-transparent ",
  white:     "bg-white         hover:bg-gray-50       focus:ring-gray-500      text-gray-700  border-gray-300    ",
  neutral:   "bg-neutral-600   hover:bg-neutral-700   focus:ring-neutral-500   text-gray-900  border-transparent ",
  danger:    "bg-danger-600    hover:bg-danger-700    focus:ring-danger-500    text-white     border-transparent ",
  warning:   "bg-warning-600   hover:bg-warning-700   focus:ring-warning-500   text-white     border-transparent ",
}

type ButtonTag = "button" | "a"

type Props<T extends ButtonTag> =
  // expose all native button or anchor props for maximum flexibility
  JSX.IntrinsicElements[T] & {
    size?: keyof typeof sizeStyles
    color?: keyof typeof colorStyles
    tag?: T
  }

type ElementType<T extends ButtonTag> = //
  T extends "button" ? HTMLButtonElement : HTMLAnchorElement

type RefType<T extends ButtonTag> = React.Ref<ElementType<T>>
