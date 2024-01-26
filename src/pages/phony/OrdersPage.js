import { Route, Routes } from 'react-router-dom';

export const OrdersPage = () => 'Zamówienia :>';

export const NotPaidOrders= () => 'Nieopłacone :>';
export const NotSentOrders= () => 'Niewysłane :>';
export const ReturnedOrders= () => 'Zwrócone :>';

export const OrdersRoutes = () => (
  <Routes>
    <Route index element={<OrdersPage />} />
    <Route path="not_paid" element={<NotPaidOrders />} />
    <Route path="not_sent" element={<NotSentOrders />} />
    <Route path="returned" element={<ReturnedOrders />} />
  </Routes>
);

