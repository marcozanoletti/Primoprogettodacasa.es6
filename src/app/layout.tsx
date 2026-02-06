import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ClerkProvider>
      {/* Redirect to sign in if user is not authenticated */}
      {!pageProps.user ? <RedirectToSignIn /> : <Component {...pageProps} />}
    </ClerkProvider>
  );
};

export default MyApp;
