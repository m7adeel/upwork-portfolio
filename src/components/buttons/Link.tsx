import { default as CLink } from 'next/link';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  withPadding?: boolean;
  isPageUrl?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Link = ({
  href,
  className = '',
  isPageUrl,
  children,
  onClick = () => {},
  withPadding = false,
  ...rest
}: Props) => {
  if (withPadding) {
    if (isPageUrl) {
      return (
        <CLink
          href={href || '/'}
          className={`group ${className}`}
          onClick={onClick}
          {...rest}
        >
          <span className="relative w-fit">
            <p className="px-0.5">{children}</p>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
          </span>
        </CLink>
      );
    }

    return (
      <a
        href={href}
        className={`group ${className}`}
        onClick={onClick}
        {...rest}
      >
        <span className="relative w-fit">
          <p className="px-0.5">{children}</p>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
        </span>
      </a>
    );
  }

  if (isPageUrl) {
    return (
      <CLink
        href={href || '/'}
        className={`relative ${className} group`}
        onClick={onClick}
        {...rest}
      >
        <p className="px-0.5 inline-block">{children}</p>
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
      </CLink>
    );
  }

  return (
    <a
      href={href}
      className={`relative ${className} group`}
      onClick={onClick}
      {...rest}
    >
      <p className="px-0.5 inline-block">{children}</p>
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
    </a>
  );
};

export default Link;
