import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant'});
  }, [pathname]);

  return null;
}

export const toDigits = (phone) => phone.replace(/\D/g, '');

export const whatsappLink = (phone, message = '') => {
  const base = `https://wa.me/${toDigits(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const telLink = (phone) => `tel:+${toDigits(phone)}`;