export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <title>Excenta</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
