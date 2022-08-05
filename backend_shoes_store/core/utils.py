import csv
import io


class Utils:
    @staticmethod
    def csv_to_dict(file) -> list:
        """
        Transform csv to dict
        Args:
            file: CSV file to transform
        Return:
            A dict base on csv file
        """
        decoded_csv = file.read().decode('utf-8')
        io_string = io.StringIO(decoded_csv)
        csv_reader = csv.DictReader(io_string, delimiter=';')
        return [row for row in csv_reader]

    @staticmethod
    def csv_header_validator(file, fields: str, delimiter) -> list:
        """
        Validate csv from headers
        Args:
            file: CSV file to validate
            fields: Fields to compare
        Return:
            A list with missing fields
        """
        decoded_csv = file.read().decode('utf-8')
        io_string = io.StringIO(decoded_csv)
        csv_reader = csv.DictReader(io_string, delimiter=delimiter)

        header = next(csv_reader)

        for value in header:
            if value in header:
                try:
                    fields.remove(value)
                except ValueError:
                    continue
        return fields
