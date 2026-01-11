import { createClient } from '@supabase/supabase-js';

// Read values from environment variables.
// In Vite, only variables prefixed with "VITE_" are exposed to the client.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Basic safety check – helps catch misconfigured env vars during development.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase configuration. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  );
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Optional: You can export helper functions for common operations here, e.g.:
export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) throw error;
  return user;
};