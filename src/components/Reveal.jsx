import useReveal from '../hooks/useReveal';

const Reveal = ({
  children,
  as = 'div',
  className = '',
  delay = 0,
  mode = 'scroll',
  triggerDelay,
  ...rest
}) => {
  const Tag = as;
  const [ref, isVisible] = useReveal({
    mode,
    triggerDelay: triggerDelay ?? (mode === 'mount' ? 150 : 80),
  });

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
