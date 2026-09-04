import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ovobtybrjzklndkzxiiv.supabase.co';
const supabaseKey = 'sb_publishable_dD9ItHKNfeiilfAw1altHQ_Jx9ldPeQ';

export const supabase = createClient(supabaseUrl, supabaseKey);