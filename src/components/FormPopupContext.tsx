import React, { createContext, useContext, useState, useCallback } from 'react';

type FormPopupContextType = {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

const FormPopupContext = createContext<FormPopupContextType>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export const useFormPopup = () => useContext(FormPopupContext);

export const FormPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <FormPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </FormPopupContext.Provider>
  );
};
