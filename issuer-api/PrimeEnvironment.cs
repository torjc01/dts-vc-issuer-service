using System;

namespace Prime
{
    public static class PrimeEnvironment
    {
        public static readonly string Name = Environment.GetEnvironmentVariable("APP") ?? "local";
        public static readonly string FrontendUrl = Environment.GetEnvironmentVariable("FRONTEND_URL") ?? "localhost:4200";
        public static readonly string BackendUrl = Environment.GetEnvironmentVariable("BACKEND_URL") ?? "http://localhost:5000/api";
        public static readonly string LogFile = Environment.GetEnvironmentVariable("LOG_FILE_PATH") ?? "logs";

        public static bool IsProduction { get => Name == "prod"; }
        public static bool IsLocal { get => Name == "local"; }

        public static class Postgres
        {
            public static readonly string Server = System.Environment.GetEnvironmentVariable("POSTGRES_SERVER");
            public static readonly string Username = System.Environment.GetEnvironmentVariable("POSTGRES_USERNAME");
            public static readonly string Db = System.Environment.GetEnvironmentVariable("POSTGRES_DB");
            public static readonly string PgPassword = System.Environment.GetEnvironmentVariable("PGPASSWORD");
            public static readonly string ConnectionString = $"Host=db;Port=5432;Database=dts_issuer-db;Username=dbuser;Password=dbpassword;";
        }

        /// <summary>
        /// Aries Prime Agent
        /// </summary>
        public static class VerifiableCredentialApi
        {
            public static readonly string Url = Environment.GetEnvironmentVariable("VERIFIABLE_CREDENTIAL_API_URL") ?? "https://prime-agent-admin-dev.pathfinder.gov.bc.ca/";
            public static readonly string Key = Environment.GetEnvironmentVariable("VERIFIABLE_CREDENTIAL_API_KEY") ?? "P8ZmRJ05biXGWI1/bDtXcp1pixtWdsAqhcUJcn4S7QQ=";
            public static readonly string WebhookKey = Environment.GetEnvironmentVariable("VERIFIABLE_CREDENTIAL_WEBHOOK_KEY") ?? "0ce755d5-1fb1-483a-ba22-439061aa8f67";
        }
    }
}
