import type { NextConfig } from "next";
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// `unsafe-eval` só em desenvolvimento (o React usa eval no modo dev); produção não precisa.
const devEval = process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : '';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${devEval} https://www.clarity.ms;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.clarity.ms https://c.clarity.ms;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
`;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: projectRoot,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
