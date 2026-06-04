"use client";

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="transition-transform hover:scale-110">
    <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="transition-transform hover:scale-110">
    <path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.976L2 22l5.233-1.337a9.982 9.982 0 0 0 4.778 1.216h.004c5.508 0 9.989-4.481 9.989-9.985 0-2.67-1.038-5.18-2.926-7.071A9.922 9.922 0 0 0 12.012 2zm5.344 14.281c-.22.616-1.281 1.185-1.782 1.247-.457.056-.995.1-3.218-.82-2.686-1.111-4.382-3.856-4.516-4.035-.133-.18-1.077-1.432-1.077-2.732 0-1.3.673-1.942.912-2.2.239-.258.52-.323.693-.323.174 0 .346.002.502.008.163.007.382-.061.597.458.225.545.748 1.83.814 1.961.065.132.108.286.022.458-.086.172-.13.279-.26.41-.13.13-.271.284-.39.398-.13.118-.266.248-.118.502.149.255.663 1.096 1.428 1.776.989.88 1.815 1.152 2.08 1.27.264.118.42.097.575-.08.156-.178.673-.787.85-1.058.178-.27.355-.226.593-.135.239.091 1.503.71 1.763.84.26.13.433.195.498.303.065.108.065.632-.155 1.248z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="transition-transform hover:scale-110">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    <path fill="#fff" d="M16.671 15.542l.532-3.469h-3.328V9.823c0-.949.465-1.874 1.956-1.874h1.514V5.011s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.645H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="transition-transform hover:scale-110">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="100%" x2="100%" y2="0">
        <stop offset="0%" stopColor="#FCCF0A" />
        <stop offset="25%" stopColor="#FD3A4A" />
        <stop offset="50%" stopColor="#D500C5" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.364a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="transition-transform hover:scale-110">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.5 5.54-3.82 7.15-2.26 1.57-5.28 2-7.85 1.05-2.58-.94-4.66-3.13-5.38-5.83-.71-2.71-.16-5.74 1.53-8 1.71-2.28 4.6-3.5 7.42-3.32v4.06c-1.39-.23-2.91-.14-4.14.61-1.23.74-2.06 2.06-2.25 3.5-.2 1.45.24 2.99 1.19 4.09.95 1.11 2.45 1.72 3.94 1.57 1.48-.15 2.84-1.02 3.57-2.32.53-.94.75-2.03.73-3.12-.05-5.38-.02-10.77-.02-16.15z" fill="#fff" />
    <path d="M12.53 16.14c.02 1.09-.2 2.18-.73 3.12-.73 1.3-2.09 2.17-3.57 2.32-1.49.15-2.99-.46-3.94-1.57-.95-1.1-1.39-2.64-1.19-4.09.19-1.44 1.02-2.76 2.25-3.5 1.23-.75 2.75-.84 4.14-.61v-4.06c-2.82-.18-5.71 1.04-7.42 3.32-1.69 2.26-2.24 5.29-1.53 8 .72 2.7 2.8 4.89 5.38 5.83 2.57.95 5.59.52 7.85-1.05 2.32-1.61 3.74-4.37 3.82-7.15.03-2.91.01-5.83.02-8.75.52.34 1.05.67 1.62.93 1.31.62 2.76.92 4.2.97v-4.03c-1.54-.17-3.12-.68-4.24-1.79-1.12-1.08-1.67-2.64-1.75-4.17h-3.91c.02.01.02 16.13.02 16.15z" fill="#00f2fe" style={{ mixBlendMode: 'screen' }} />
    <path d="M14.6 3.96c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93.01 2.92.01 5.84-.02 8.75-.08 2.78-1.5 5.54-3.82 7.15-2.26 1.57-5.28 2-7.85 1.05-2.58-.94-4.66-3.13-5.38-5.83-.71-2.71-.16-5.74 1.53-8 1.71-2.28 4.6-3.5 7.42-3.32v4.06c-1.39-.23-2.91-.14-4.14.61-1.23.74-2.06 2.06-2.25 3.5-.2 1.45.24 2.99 1.19 4.09.95 1.11 2.45 1.72 3.94 1.57 1.48-.15 2.84-1.02 3.57-2.32.53-.94.75-2.03.73-3.12-.05-5.38-.02-10.77-.02-16.15h3.91c.08 1.53.63 3.09 1.75 4.17z" fill="#fe0050" style={{ mixBlendMode: 'screen' }} />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full relative border-t border-white/10 bg-[#050505] px-4 py-12 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none z-0"
        style={{ backgroundImage: "url('/2.jpg')" }}
      />
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center gap-16 relative z-10">
        
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Mati_Studio_vector-2.svg" alt="Mati Studio" className="h-12 w-auto mx-auto mb-6" />
          <p className="text-zinc-400 font-light max-w-md mx-auto">
            Experiencia en el arte de la belleza.
          </p>
        </div>

        {/* Map Iframe */}
        <div className="w-full rounded-2xl overflow-hidden ring-1 ring-white/10 h-64 md:h-80 shadow-[0_0_30px_rgba(234,67,53,0.15)]">
          <iframe 
            src="https://maps.google.com/maps?q=20.863671,-86.9010975&t=&z=18&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 md:gap-8 justify-items-center">
          <div className="flex flex-col items-center gap-3">
            <a href="https://www.google.com/maps/place/MATI+STUDIO/@20.863671,-86.9010975,17z/data=!3m1!4b1!4m6!3m5!1s0x8f4e8900305fb5d7:0xb70063a9fbeba9f0!8m2!3d20.863671!4d-86.9010975!16s%2Fg%2F11n9ctb6bm?entry=ttu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
              <MapPinIcon />
              <span className="text-sm text-zinc-300 font-light max-w-[200px] transition-colors hover:text-[#EA4335]">
                Timon y Turipache, esquina, Planta baja 22, 77586 Puerto Morelos
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a href="https://wa.me/529983402011" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
              <WhatsappIcon />
              <span className="text-sm text-zinc-300 font-light transition-colors hover:text-[#25D366]">
                99 83 40 20 11
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8 items-center">
              <a href="https://www.instagram.com/matistudio26?igsh=MWo5YXk4anJhM285NQ==" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/share/1HB9RyBtYx/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.tiktok.com/@mati.studio0?_r=1&_t=ZS-96v52peW0f7" target="_blank" rel="noopener noreferrer">
                <TiktokIcon />
              </a>
            </div>
            <span className="text-sm text-zinc-400 font-light">
              @matistudio26
            </span>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-light">
            © {new Date().getFullYear()} MATI STUDIO. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-500 uppercase tracking-widest hover:text-brand-orange transition-colors">Privacidad</a>
            <a href="#" className="text-xs text-zinc-500 uppercase tracking-widest hover:text-brand-orange transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
