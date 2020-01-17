import { useEffect } from 'react';

function useClickOutside(ref, cb) {
  const handleClickOutside = event => {
    if (!ref.current?.contains(event.target)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

export default useClickOutside;
