import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://crwmepgfxrbnlcsvjpqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyd21lcGdmeHJibmxjc3ZqcHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1MzAxMTIsImV4cCI6MjA3NDEwNjExMn0.ikkfxooqvW_hdiQ4n9GnaJ3iyBj5Dux9MMrUHHaBMgY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
