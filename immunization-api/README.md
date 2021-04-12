# DTS VC Issuer Service - Immunization Service

## To build this .Net Core 5 service

```bash
dotnet build
```

## To Run locally

```bash
dotnet run
```

## Swagger

```bash
http://localhost:5001/swagger/index.html
```

## Example Patients

- Fictional characters from Schitt's Creek TV series.
- Real Vaccines with real DIN codes for Canada.
- Plausable Immunization Records.

For example data sets loaded in EF Memory DB, see the file

```bash
src/Respository/Example/SampleDataInitializer.cs
```

## Docker build

```bash
docker build . -t immunization-api
```

### Docker Run

```bash
docker container rm immunization
docker run -it -p 8080:8080 -p 8081:8081 --name immunization immunization-api:latest
```
