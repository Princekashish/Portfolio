import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const variants = {
  primary: 'bg-[#454545] text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-400 text-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
};

const sizes = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
};

const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    onClick,
    className = '',
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        'inline-flex items-center rounded-full outline-none',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="ml-2 h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
