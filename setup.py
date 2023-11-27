from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in ticket_booking/__init__.py
from ticket_booking import __version__ as version

setup(
	name="ticket_booking",
	version=version,
	description="Ticket Booking",
	author="Bhushan Sapkal",
	author_email="bhushan@agkiya.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
