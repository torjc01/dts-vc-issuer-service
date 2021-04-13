
namespace ImmunizationApi.Repository.Example
{
    using System;
    using System.Collections.Generic;

    using Microsoft.Extensions.Logging;
    using Microsoft.EntityFrameworkCore;

    using ImmunizationApi.Models.Entity;

    public static class SampleDataInitializer
    {
        public static void Seed(ImmunizationDbContext context)
        {
            LocationEntity loc1 = new LocationEntity
            {
                Name = "VCHA",
                City = "Vancouver",
                Country = "CA",
                PostalCode = "V8A 0K0"

            };
            context.Locations.Add(loc1);

            LocationEntity loc2 = new LocationEntity
            {
                Name = "VCHA",
                City = "Vancouver",
                Country = "CA",
                PostalCode = "V8A 0K0"

            };
            context.Locations.Add(loc2);

            LocationEntity loc3 = new LocationEntity
            {
                Name = "Rexall",
                StreetLine1 = "6580 Fraser St.",
                City = "Vancouver",
                Country = "CA",
                PostalCode = "V5X 3T4"

            };
            context.Locations.Add(loc3);

            LocationEntity loc4 = new LocationEntity
            {
                Name = "VCHA - Simon Fraser Elementary School",
                StreetLine1 = "100 W 15th Ave",
                City = "Vancouver",
                Country = "CA",
                PostalCode = "V5Y 3B7"

            };
            context.Locations.Add(loc4);

            context.SaveChanges();

            PatientEntity patient1 = new PatientEntity
            {
                BirthDate = new System.DateTime(1957, 6, 22),
                GivenNames = "Johnny Michael",
                LastName = "Rose",
                Id = "9039555099"
            };
            context.Patients.Add(patient1);

            PatientEntity patient2 = new PatientEntity
            {
                BirthDate = new System.DateTime(1961, 3, 17),
                GivenNames = "Moira Maria",
                LastName = "Rose",
                Id = "9034545122"
            };
            context.Patients.Add(patient2);

            PatientEntity patient3 = new PatientEntity
            {
                BirthDate = new System.DateTime(1952, 1, 14),
                GivenNames = "Roland Ethan",
                LastName = "Schitt",
                Id = "900489178"
            };
            context.Patients.Add(patient3);

            PatientEntity patient4 = new PatientEntity
            {
                BirthDate = new System.DateTime(1991, 9, 22),
                GivenNames = "Veronica",
                LastName = "Lee",
                Id = "9902489314"
            };
            context.Patients.Add(patient4);
            context.SaveChanges();

            VaccineEntity vaccine1 = new VaccineEntity
            {
                Id = "02510014",  // DIN
                Name = "MODERNA COVID-19 mRNA-1273",
                Manufacturer = "Moderna Therapeutics Inc.",
                Disease = "COVID-19"
            };
            context.Vaccines.Add(vaccine1);

            VaccineEntity vaccine2 = new VaccineEntity
            {
                Id = "02510847",  // DIN
                Name = "ASTRAZENECA COVID-19 VACCINE (COVID-19)",
                Manufacturer = "AstraZeneca Canada Inc.",
                Disease = "COVID-19"
            };
            context.Vaccines.Add(vaccine2);

            VaccineEntity vaccine3 = new VaccineEntity
            {
                Id = "02509210",  // DIN
                Name = "PFIZER-BIONTECH COVID-19 VACCINE mRNA (COVID-19)",
                Manufacturer = "BioNTech Manufacturing GmbH",
                Disease = "COVID-19"
            };
            context.Vaccines.Add(vaccine3);

            VaccineEntity vaccine4 = new VaccineEntity
            {
                Id = "02512947",  // DIN
                Name = "COVISHIELD (COVID-19)",
                Manufacturer = "Verity Pharmaceuticals Inc.",
                Disease = "COVID-19"
            };
            context.Vaccines.Add(vaccine4);

            VaccineEntity vaccine5 = new VaccineEntity
            {
                Id = "02513153",  // DIN
                Name = "JANSSEN COVID-19 VACCINE (COVID-19)",
                Manufacturer = "Janssen Inc.",
                Disease = "COVID-19"
            };
            context.Vaccines.Add(vaccine5);

            VaccineEntity vaccine6 = new VaccineEntity
            {
                Id = "02445646",  // DIN
                Name = "Fluzone High-Dose",
                Manufacturer = "SANOFI PASTEUR LIMITED",
                Disease = "Influenza"
            };
            context.Vaccines.Add(vaccine6);

            VaccineEntity vaccine7 = new VaccineEntity
            {
                Id = "02240255",  // DIN
                Name = "ADACEL",
                Manufacturer = "SANOFI PASTEUR LIMITED",
                Disease = "Diphtheria, Tetanus and Pertussis"
            };
            context.Vaccines.Add(vaccine7);

            VaccineEntity vaccine8 = new VaccineEntity
            {
                Id = "02246081",  // DIN
                Name = "VARIVAX III SINGLE-DOSE VIAL 0.5 ML",
                Manufacturer = "Merck Canada Inc",
                Disease = "Varicella (Chickenpox)"
            };
            context.Vaccines.Add(vaccine8);

            VaccineEntity vaccine9 = new VaccineEntity
            {
                Id = "02243167",  // DIN
                Name = "Pediacel 0.5 mL",
                Manufacturer = "Sanofi Pasteur Limited",
                AtcCode = "J07CA06",
                Disease = "DIPH,PERT(A),TET,POLIO,HIB/PF 15-20-5-10 HV"
            };
            context.Vaccines.Add(vaccine9);

            VaccineEntity vaccine10 = new VaccineEntity
            {
                Id = "02437058",  // DIN
                Name = "Gardasil 9",
                Manufacturer = "MERCK CANADA INC",
                AtcCode = "",
                Disease = "HPV VACCINE 9-VALENT/PF 0.5 ML HV"
            };
            context.Vaccines.Add(vaccine10);

            VaccineEntity vaccine11 = new VaccineEntity
            {
                Id = "00466085",  // DIN
                Name = "M-M-R II",
                Manufacturer = "MERCK CANADA INC",
                AtcCode = "",
                Disease = "MEASLES,MUMPS,RUBELLA VACC/PF 1K-5K/0.5 HS"
            };
            context.Vaccines.Add(vaccine11);

            context.SaveChanges();

            ImmunizationEntity imm1 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2021, 1, 31),
                AdministeredAt = loc1,
                DoseNumber = 1,
                LotNumber = "123456A",
                NextDueDate = new DateTime(2021, 4, 30),
                PatientId = patient1.Id,
                VaccineId = vaccine1.Id
            };
            context.Immunizations.Add(imm1);

            ImmunizationEntity imm2 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2021, 4, 08),
                DoseNumber = 2,
                LotNumber = "123456A",
                AdministeredAt = loc2,
                PatientId = patient1.Id,
                VaccineId = vaccine1.Id
            };
            context.Immunizations.Add(imm2);

            ImmunizationEntity imm3 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2021, 1, 22),
                DoseNumber = 1,
                LotNumber = "MT0055",
                AdministeredAt = loc1,
                PatientId = patient2.Id,
                VaccineId = vaccine2.Id
            };
            context.Immunizations.Add(imm3);

            ImmunizationEntity imm4 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2021, 2, 27),
                DoseNumber = 1,
                LotNumber = "AB1234",
                AdministeredAt = loc2,
                PatientId = patient3.Id,
                VaccineId = vaccine5.Id
            };
            context.Immunizations.Add(imm4);

            ImmunizationEntity imm5 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2021, 4, 2),
                DoseNumber = 1,
                LotNumber = "AA3303",
                AdministeredAt = loc1,
                Patient = patient4,
                VaccineId = vaccine4.Id
            };
            context.Immunizations.Add(imm4);

            ImmunizationEntity imm6 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2020, 9, 22),
                AdministeredAt = loc3,
                DoseNumber = 1,
                LotNumber = "",
                NextDueDate = new DateTime(2021, 10, 1),
                PatientId = patient3.Id,
                VaccineId = vaccine6.Id
            };
            context.Immunizations.Add(imm6);

            ImmunizationEntity imm7 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2019, 7, 10),
                AdministeredAt = loc1,
                DoseNumber = 1,
                LotNumber = "AA10101",
                NextDueDate = new DateTime(2029, 7, 1),
                PatientId = patient4.Id,
                VaccineId = vaccine7.Id
            };
            context.Immunizations.Add(imm7);

            ImmunizationEntity imm8 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2003, 3, 19),
                AdministeredAt = loc3,
                DoseNumber = 1,
                LotNumber = "10344AB",
                PatientId = patient4.Id,
                VaccineId = vaccine8.Id
            };
            context.Immunizations.Add(imm8);

            ImmunizationEntity imm9 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(1991, 11, 28),
                AdministeredAt = loc1,
                DoseNumber = 1,
                LotNumber = "",
                NextDueDate = new DateTime(1992, 1, 30),
                PatientId = patient4.Id,
                VaccineId = vaccine9.Id
            };
            context.Immunizations.Add(imm9);

            ImmunizationEntity imm10 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(1992, 2, 2),
                AdministeredAt = loc1,
                DoseNumber = 2,
                LotNumber = "",
                NextDueDate = new DateTime(1992, 4, 2),
                PatientId = patient4.Id,
                VaccineId = vaccine9.Id
            };
            context.Immunizations.Add(imm10);

            ImmunizationEntity imm11 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(1992, 4, 6),
                AdministeredAt = loc2,
                DoseNumber = 3,
                LotNumber = "",
                NextDueDate = new DateTime(1993, 3, 22),
                PatientId = patient4.Id,
                VaccineId = vaccine9.Id
            };
            context.Immunizations.Add(imm11);

            ImmunizationEntity imm12 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(1993, 3, 29),
                AdministeredAt = loc2,
                DoseNumber = 4,
                LotNumber = "",
                PatientId = patient4.Id,
                VaccineId = vaccine9.Id
            };
            context.Immunizations.Add(imm12);

            ImmunizationEntity imm13 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(1992, 10, 10),
                AdministeredAt = loc1,
                DoseNumber = 1,
                LotNumber = "",
                PatientId = patient4.Id,
                VaccineId = vaccine11.Id
            };
            context.Immunizations.Add(imm13);

            ImmunizationEntity imm14 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2005, 3, 10),
                AdministeredAt = loc4,
                DoseNumber = 1,
                LotNumber = "",
                PatientId = patient4.Id,
                VaccineId = vaccine10.Id
            };
            context.Immunizations.Add(imm14);

            ImmunizationEntity imm15 = new ImmunizationEntity
            {
                AdministeredOnDate = new DateTime(2020, 11, 19),
                AdministeredAt = loc3,
                DoseNumber = 1,
                LotNumber = "",
                NextDueDate = new DateTime(2021, 10, 1),
                PatientId = patient3.Id,
                VaccineId = vaccine8.Id
            };
            context.Immunizations.Add(imm15);

            context.SaveChanges();
        }
    }
}