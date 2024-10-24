import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/i18n/config.ts' //đường dẫn đến file cấu hình locale
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig); //cung cấp config next-intl cho nextjs