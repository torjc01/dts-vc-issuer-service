using System;

namespace Issuer
{
    public static class IssuerEnvironment
    {
        public readonly static string Name = Environment.GetEnvironmentVariable("APP") ?? "local";
        public readonly static string FrontendUrl = Environment.GetEnvironmentVariable("FRONTEND_URL") ?? "localhost:4200";
        public readonly static string BackendUrl = Environment.GetEnvironmentVariable("BACKEND_URL") ?? "http://localhost:5000/api";
        public readonly static string LogFile = Environment.GetEnvironmentVariable("LOG_FILE_PATH") ?? "logs";

        public static bool IsProduction { get => Name == "prod"; }
        public static bool IsLocal { get => Name == "local"; }

        public static class Postgres
        {
            public readonly static string Server = System.Environment.GetEnvironmentVariable("POSTGRES_SERVER");
            public readonly static string Username = System.Environment.GetEnvironmentVariable("POSTGRES_USERNAME");
            public readonly static string Db = System.Environment.GetEnvironmentVariable("POSTGRES_DB");
            public readonly static string PgPassword = System.Environment.GetEnvironmentVariable("PGPASSWORD");
            public readonly static string ConnectionString = $"Host=localhost;Port=5433;Database=dts_issuer-db;Username=postgres;Password=dbpassword;";
        }

        /// <summary>
        /// Aries issuer Agent
        /// </summary>
        public static class VerifiableCredentialApi
        {
            public static readonly string Url = Environment.GetEnvironmentVariable("VERIFIABLE_CREDENTIAL_API_URL") ?? "http://localhost:8024/";
            public static readonly string Key = Environment.GetEnvironmentVariable("VERIFIABLE_CREDENTIAL_API_KEY") ?? "agent-api-key-dev";
        }

        /// <summary>
        /// Immunization Api
        /// </summary>
        public static class ImmunizationApi
        {
            public static readonly string Url = Environment.GetEnvironmentVariable("IMMUNIZATION_API_URL") ?? "https://test.ca";
        }
    }
}
