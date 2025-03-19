import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkqdhfnhindafhhughzp.supabase.co'  // replace with your URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcWRoZm5oaW5kYWZoaHVnaHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNTM5NzMsImV4cCI6MjA1NzkyOTk3M30.S10PDQ0NNa9FUR-HXFUSdatypZ2tUeMGwfD2bU26xFk'  // replace with your anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
