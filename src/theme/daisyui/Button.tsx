import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";

export type ReactButtonProps = DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

export type ButtonProps = ReactButtonProps&{}
export const Button: FC<PropsWithChildren<ButtonProps>> =({
  className:_className,
  ...buttonProp
})=>{
  const className=['btn',_className].join(" ")
  return <button {...buttonProp} className={className}/>
}