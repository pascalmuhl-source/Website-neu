import { forwardRef, useEffect, useRef, useState } from 'react';

function mergeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    }
  };
}

const Reveal = forwardRef(function Reveal({ as: Tag = 'div', className = '', children, ...props }, forwardedRef) {
  const localRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = localRef.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={mergeRefs(localRef, forwardedRef)}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
