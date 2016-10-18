PACKAGE = unb-gama
VERSION = $(shell cat VERSION)
DISTDIR = $(PACKAGE)_$(VERSION)
TARBALL = $(DISTDIR).orig.tar.gz

THEME_NAME 	= unb-gama
THEME_SRC 	= $(THEME_NAME)
THEME_DIR 	= /usr/share/noosfero/public/designs/themes

INSTALL_DIR = $(DESTDIR)/$(THEME_DIR)/$(THEME_NAME)

help:
	@echo 'Portal Theme Package version:$(VERSION)'
	@echo
	@echo 'Command:'
	@echo ' 	dist  		Create the tarball for the Portal Theme'
	@echo ' 	distclean 		Clean the dist path'
	@echo ' 	install 	Install Portal Theme'
	@echo ' 	build-pkg 		Create a debian package from the src'

dist: distclean
	mkdir -p dist/$(DISTDIR)
	tar --exclude='*.git' --exclude=$(DISTDIR) \
		--exclude='*.spec' \
		--exclude='dist' \
		--exclude='Vagrantfile' -cf - * | (cd dist/$(DISTDIR) && tar xaf -)
	cd dist/ && tar --exclude=.git -czf $(TARBALL) $(DISTDIR)
	$(RM) -r $(DISTDIR)

distclean:
	$(RM) -r dist/

install:
	install -d -m 0755 $(INSTALL_DIR)
	cp -vrp $(THEME_SRC)/* $(INSTALL_DIR)/

build-pkg: dist
	cd dist/$(DISTDIR) && debuild -us -uc
