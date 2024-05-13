import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsMobile } from './mobileSlice'; // Import the action creator

function WindowSizeListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateIsMobileHandler = () => {
      dispatch(updateIsMobile());
    };

    window.addEventListener('resize', updateIsMobileHandler);
    updateIsMobileHandler();

    return () => window.removeEventListener('resize', updateIsMobileHandler);
  }, [dispatch]);

  return null;
}

export default WindowSizeListener;
