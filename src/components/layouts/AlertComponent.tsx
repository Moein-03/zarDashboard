'use client'

import { useEffect } from 'react';

export default function AlertComponent() {
     useEffect(() => {
          alert('در این نمونه کار فقط بخش نمودار های صفحه اصلی توسعه داده شده و مابقی بخش ها ناقص می‌باشد.')
     }, []);

     return null;
}